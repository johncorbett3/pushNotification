var push = require('web-push')

let vapidKeys = {
    publicKey: 'BLK4eeghGEKk88siPsbar2v6oQuJVYmZvqr0qIGKhzx3r4Glm-orSDFDipN771EgwYjuSLMeP3PfL9eKA6M_8mI',
    privateKey: '0uTUd_h_FaGYRnWHKdLw8SszIOoqcY0NMpKYawzh7Os'
  }

push.setVapidDetails('mailto:john.corbett3@yahoo.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
  endpoint:"https://fcm.googleapis.com/fcm/send/f5drH9Iju-c:APA91bEQUBKdRZr4jDJTJCchDlQgYM_xbgLaLNtNugO2xe5IfiJdg7XWRfKpdJX2kvQMxrorDtp_1mm3AGUCPxhRfT5D7IXsJ_URmLp08O0Y5CmdsQH9Vamd2aft4CaTSKIgOIha7l7e",
  expirationTime:null,
  keys:{
    p256dh:"BCiGc8Glyw1vBAKG24AZoKgyeCG-dngkhNs2TFWKo3aLQKiChXgQ3n7dSrkrTKySKm7j6Qutx2_ONKaJCU2l9AU",
    auth:"H-h5MsEY9JPHN7RvEFj-Hg"
  }};

push.sendNotification(sub, 'test message')