var push = require('web-push')

let vapidKeys = {
    publicKey: 'BLK4eeghGEKk88siPsbar2v6oQuJVYmZvqr0qIGKhzx3r4Glm-orSDFDipN771EgwYjuSLMeP3PfL9eKA6M_8mI',
    privateKey: '0uTUd_h_FaGYRnWHKdLw8SszIOoqcY0NMpKYawzh7Os'
  }

push.setVapidDetails('mailto@john.corbett3@yahoo.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {};

push.sendNotification(sub, 'test message')