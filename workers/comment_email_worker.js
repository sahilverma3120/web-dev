const queue = require('../config/kue');

const commentsMailer = require('../mailers/comments_mailer');

queue.process('emails', function(job, done){
    console.log('emails worker is processing a job ', job.data);

    commentsMailer.newComment(job.data);

    done()https://jamboard.google.com/d/1MNSyiGMHisC_cFIqYm5uGwyIH3fDqVmxvVQw7Uhex_o/edit?usp=sharing
});
