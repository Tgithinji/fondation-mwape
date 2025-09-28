/**
 * Google Apps Script for Fondation Marie Mwape Contact Form
 * This script sends email notifications when someone submits a contact message
 *
 * SETUP INSTRUCTIONS:
 * 1. Go to your Google Form and link it to Google Sheets (Responses > Link to Sheets)
 * 2. Open the linked Google Sheet
 * 3. Go to Extensions > Apps Script
 * 4. Replace the default code with this script
 * 5. Save the project (give it a name like "Contact Form Email Notifications")
 * 6. Run setupTrigger() function once to create the form submit trigger
 * 7. Test with testEmail() function first
 * 8. Submit a real form to test the full workflow
 */

function onFormSubmit(e) {
  sendEmail(e);
}

function sendEmail(e) {
  try {
    // Log the event object for debugging
    console.log("Event object:", e);

    // Check if event object exists and has values
    if (!e || !e.values) {
      throw new Error(
        "Event object or values array is missing. Make sure this function is triggered by a form submission.",
      );
    }

    // Get form responses - adjust indices based on your form field order
    var responses = e.values;
    console.log("Form responses:", responses);

    // Ensure we have enough responses
    if (responses.length < 5) {
      throw new Error(
        "Not enough form responses. Expected at least 5 fields, got " +
          responses.length,
      );
    }

    var timestamp = responses[0] || "Not provided";
    var firstName = responses[1] || "Not provided";
    var lastName = responses[2] || "Not provided";
    var email = responses[3] || "Not provided";
    var message = responses[4] || "Not provided";

    // Create full name
    var fullName = firstName + " " + lastName;

    // Validate essential fields
    if (!firstName || firstName === "Not provided") {
      throw new Error("First name is missing");
    }
    if (!email || email === "Not provided" || !isValidEmail(email)) {
      throw new Error("Valid email is required");
    }
    if (!message || message === "Not provided") {
      throw new Error("Message is missing");
    }

    // Foundation email address
    var foundationEmail = "theguru282@gmail.com";

    console.log("Processing contact message from:", fullName, "Email:", email);

    // --- Email to Foundation (Admin) ---
    var subjectAdmin = "📩 Nouveau Message de Contact: " + fullName;
    var bodyAdmin =
      "📨 NOUVEAU MESSAGE DE CONTACT\n\n" +
      "═══════════════════════════════════════\n\n" +
      "👤 Nom complet: " +
      fullName +
      "\n" +
      "📧 Email: " +
      email +
      "\n" +
      "⏰ Reçu le: " +
      timestamp +
      "\n\n" +
      "💬 MESSAGE:\n" +
      "─────────────────────────────────\n" +
      message +
      "\n\n" +
      "═══════════════════════════════════════\n" +
      "Action requise: Veuillez répondre à ce message.\n\n" +
      "Pour répondre directement: " +
      email +
      "\n" +
      "Nom de l'expéditeur: " +
      fullName;

    // --- Auto-reply to Contact Person ---
    var subjectAutoReply =
      "Merci pour votre message - Fondation Marie Mwape ✉️";
    var bodyAutoReply =
      "Cher/Chère " +
      firstName +
      ",\n\n" +
      "🙏 MERCI POUR VOTRE MESSAGE !\n\n" +
      "Nous avons bien reçu votre message et nous vous remercions de votre intérêt pour la Fondation Marie Mwape.\n\n" +
      "📋 VOTRE MESSAGE:\n" +
      '"' +
      message +
      '"\n\n' +
      "⏰ DÉLAI DE RÉPONSE:\n" +
      "Notre équipe vous répondra dans les 24-48 heures ouvrables.\n\n" +
      "❓ URGENT ? Contactez-nous directement:\n" +
      "📧 Email: contact@fondationmariemwape.org\n" +
      "📱 WhatsApp: +243 999 123 456\n\n" +
      "Merci encore pour votre intérêt et votre soutien.\n\n" +
      "Cordialement,\n" +
      "L'équipe de la Fondation Marie Mwape\n\n" +
      "────────────────────────────────────────\n\n" +
      "Dear " +
      firstName +
      ",\n\n" +
      "🙏 THANK YOU FOR YOUR MESSAGE!\n\n" +
      "We have successfully received your message and thank you for your interest in Fondation Marie Mwape.\n\n" +
      "📋 YOUR MESSAGE:\n" +
      '"' +
      message +
      '"\n\n' +
      "⏰ RESPONSE TIME:\n" +
      "Our team will respond to you within 24-48 business hours.\n\n" +
      "❓ URGENT? Contact us directly:\n" +
      "📧 Email: contact@fondationmariemwape.org\n" +
      "📱 WhatsApp: +243 999 123 456\n\n" +
      "Thank you again for your interest and support.\n\n" +
      "Best regards,\n" +
      "The Fondation Marie Mwape Team\n\n" +
      "Received: " +
      timestamp;

    // Send emails with error handling for each
    try {
      MailApp.sendEmail(foundationEmail, subjectAdmin, bodyAdmin);
      console.log("Admin notification sent successfully to:", foundationEmail);
    } catch (adminEmailError) {
      console.error("Failed to send admin notification:", adminEmailError);
      throw new Error(
        "Failed to send admin notification: " + adminEmailError.toString(),
      );
    }

    try {
      MailApp.sendEmail(email, subjectAutoReply, bodyAutoReply);
      console.log("Auto-reply sent successfully to:", email);
    } catch (autoReplyError) {
      console.error("Failed to send auto-reply:", autoReplyError);
      // Send notification to admin about auto-reply failure
      MailApp.sendEmail(
        foundationEmail,
        "⚠️ Échec d'envoi auto-reply - " + fullName,
        "L'email de confirmation automatique n'a pas pu être envoyé à:\n\n" +
          "Nom: " +
          fullName +
          "\n" +
          "Email: " +
          email +
          "\n" +
          "Erreur: " +
          autoReplyError.toString() +
          "\n\n" +
          "Message original:\n" +
          message +
          "\n\n" +
          "Veuillez répondre manuellement à ce contact.",
      );
      console.log("Admin notified about auto-reply failure");
    }

    // Log success
    console.log("Email processing completed for contact from: " + fullName);
  } catch (error) {
    // Log detailed error information
    console.error("Detailed error information:");
    console.error("Error message:", error.toString());
    console.error("Error stack:", error.stack);
    console.error("Event object:", e);

    // Send error notification to admin with more details
    try {
      var errorDetails =
        "Erreur lors du traitement d'un message de contact:\n\n" +
        "Message d'erreur: " +
        error.toString() +
        "\n" +
        "Timestamp: " +
        new Date() +
        "\n";

      if (e && e.values) {
        errorDetails +=
          "Données du formulaire: " + JSON.stringify(e.values) + "\n";
      } else {
        errorDetails += "Aucune donnée de formulaire disponible\n";
        errorDetails += "Type d'événement: " + typeof e + "\n";
        errorDetails += "Contenu de l'événement: " + JSON.stringify(e) + "\n";
      }

      errorDetails +=
        "\nVeuillez vérifier le script et les données du formulaire.";

      MailApp.sendEmail(
        "theguru282@gmail.com",
        "🚨 Erreur - Système de contact",
        errorDetails,
      );

      console.log("Error notification sent to admin");
    } catch (notificationError) {
      console.error("Failed to send error notification:", notificationError);
    }
  }
}

/**
 * Utility function to validate email addresses
 */
function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Test function to verify email setup
 * Run this function once to test if emails are working
 */
function testEmail() {
  console.log("Starting contact email test...");

  var testEvent = {
    values: [
      new Date(),
      "Marie", // First Name
      "Dubois", // Last Name
      "marie.dubois@test.com", // Email - Change this to a real email for testing
      "Bonjour, je souhaite en savoir plus sur vos programmes d'aide aux enfants. Pouvez-vous me fournir plus d'informations ? Merci.", // Message
    ],
  };

  sendEmail(testEvent);
  console.log(
    "Test contact email function completed - check logs above for results",
  );
}

/**
 * Setup function to create the trigger automatically
 * Run this function once to set up the form submit trigger
 */
function setupTrigger() {
  console.log("Setting up contact form submission trigger...");

  try {
    // Delete existing triggers to avoid duplicates
    var triggers = ScriptApp.getProjectTriggers();
    for (var i = 0; i < triggers.length; i++) {
      if (
        triggers[i].getHandlerFunction() === "onFormSubmit" ||
        triggers[i].getHandlerFunction() === "sendEmail"
      ) {
        ScriptApp.deleteTrigger(triggers[i]);
        console.log("Deleted existing trigger");
      }
    }

    // Create new trigger - this will trigger when the connected form is submitted
    var trigger = ScriptApp.newTrigger("onFormSubmit").onFormSubmit().create();

    console.log("Contact form submission trigger created successfully");
    console.log("Trigger ID:", trigger.getUniqueId());

    // Also create a spreadsheet trigger as backup
    var spreadsheetTrigger = ScriptApp.newTrigger("sendEmail")
      .onFormSubmit()
      .create();

    console.log("Spreadsheet trigger created as backup");
    console.log("Backup trigger ID:", spreadsheetTrigger.getUniqueId());
  } catch (error) {
    console.error("Error setting up contact form trigger:", error);

    // Send error notification
    MailApp.sendEmail(
      "theguru282@gmail.com",
      "🚨 Erreur - Configuration du trigger contact",
      "Erreur lors de la configuration du trigger de contact:\n\n" +
        error.toString(),
    );
  }
}

/**
 * Function to list all current triggers (for debugging)
 */
function listTriggers() {
  var triggers = ScriptApp.getProjectTriggers();
  console.log("Current contact form triggers (" + triggers.length + "):");

  for (var i = 0; i < triggers.length; i++) {
    var trigger = triggers[i];
    console.log("- Function:", trigger.getHandlerFunction());
    console.log("  Source:", trigger.getTriggerSource());
    console.log("  Type:", trigger.getEventType());
    console.log("  ID:", trigger.getUniqueId());
    console.log("---");
  }
}

/**
 * Manual test with actual contact form data structure
 * Use this to test with the exact same data structure as your contact form
 */
function testWithContactFormStructure() {
  console.log("Testing contact form with actual form structure...");

  // Test data that matches your Google Form structure
  // Adjust the order and content based on your actual form fields
  var testEvent = {
    values: [
      "2024-01-15 16:45:30", // Timestamp
      "Jean", // First Name
      "Mukendi", // Last Name
      "jean.mukendi@email.com", // Email
      "Bonjour, je suis intéressé par votre programme d'aide aux albinos. Comment puis-je contribuer en tant que bénévole ou par un don ? J'aimerais également savoir s'il y a des événements à venir. Merci pour votre excellent travail !", // Message
    ],
  };

  sendEmail(testEvent);
  console.log("Contact form structure test completed");
}

/**
 * Function to send a weekly summary of contact messages to admin
 * Optional: Set up a time-based trigger to run this weekly
 */
function sendWeeklyContactSummary() {
  try {
    // Get the spreadsheet
    var sheet = SpreadsheetApp.getActiveSheet();
    var data = sheet.getDataRange().getValues();

    // Get data from the last 7 days
    var oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    var recentContacts = [];
    for (var i = 1; i < data.length; i++) {
      // Skip header row
      var rowDate = new Date(data[i][0]);
      if (rowDate >= oneWeekAgo) {
        recentContacts.push({
          date: data[i][0],
          firstName: data[i][1],
          lastName: data[i][2],
          email: data[i][3],
          message: data[i][4],
        });
      }
    }

    if (recentContacts.length > 0) {
      var summary =
        "📊 RAPPORT HEBDOMADAIRE - MESSAGES DE CONTACT\n\n" +
        "Période: " +
        oneWeekAgo.toLocaleDateString() +
        " - " +
        new Date().toLocaleDateString() +
        "\n" +
        "Nombre total de messages: " +
        recentContacts.length +
        "\n\n" +
        "MESSAGES REÇUS:\n" +
        "═══════════════════════════════════════\n\n";

      for (var j = 0; j < recentContacts.length; j++) {
        var contact = recentContacts[j];
        summary +=
          "📅 " +
          contact.date +
          "\n" +
          "👤 " +
          contact.firstName +
          " " +
          contact.lastName +
          "\n" +
          "📧 " +
          contact.email +
          "\n" +
          "💬 " +
          contact.message.substring(0, 100) +
          (contact.message.length > 100 ? "..." : "") +
          "\n\n" +
          "───────────────────────────────────────\n\n";
      }

      MailApp.sendEmail(
        "theguru282@gmail.com",
        "📊 Rapport Hebdomadaire - Messages de Contact (" +
          recentContacts.length +
          " messages)",
        summary,
      );

      console.log(
        "Weekly contact summary sent. " +
          recentContacts.length +
          " messages reported.",
      );
    } else {
      console.log("No contact messages in the last week.");
    }
  } catch (error) {
    console.error("Error generating weekly contact summary:", error);
    MailApp.sendEmail(
      "theguru282@gmail.com",
      "🚨 Erreur - Rapport hebdomadaire contact",
      "Erreur lors de la génération du rapport hebdomadaire:\n\n" +
        error.toString(),
    );
  }
}
