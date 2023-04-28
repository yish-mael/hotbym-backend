"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hotelOnlineBookingEmail = exports.hotelOfflineBookingEmail = exports.adminOnlineBookingEmail = exports.adminOfflineBookingEmail = exports.userBookingOnlineEmail = exports.userBookingOfflineEmail = exports.requestEmail = exports.contactEmail = exports.accountCreatedEmail = exports.forgotPasswordEmail = void 0;
const header = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                <html xmlns="http://www.w3.org/1999/xhtml">
                <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                <meta name="color-scheme" content="light">
                <meta name="supported-color-schemes" content="light">
                <style>
                @media  only screen and (max-width: 600px) {
                .inner-body {
                width: 100% !important;
                }

                .footer {
                width: 100% !important;
                }
                }

                @media  only screen and (max-width: 500px) {
                .button {
                width: 100% !important;
                }
                }
                </style>
                </head>
                <body style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -webkit-text-size-adjust: none; background-color: #ffffff; color: #718096; height: 100%; line-height: 1.4; margin: 0; padding: 0; width: 100% !important;">

                <table class="wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%; background-color: #edf2f7; margin: 0; padding: 0; width: 100%;">
                <tr>
                <td align="center" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative;">
                <table class="content" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%; margin: 0; padding: 0; width: 100%;">
                <tr>
                <td class="header" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 25px 0; text-align: center;">
                <a href="https://hotbym.com/" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; color: #3d4852; font-size: 19px; font-weight: bold; text-decoration: none; display: inline-block;">
                Hotbym
                </a>
                </td>
                </tr>

                <!-- Email Body -->
                <tr>
                <td class="body" width="100%" cellpadding="0" cellspacing="0" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%; background-color: #edf2f7; border-bottom: 1px solid #edf2f7; border-top: 1px solid #edf2f7; margin: 0; padding: 0; width: 100%;">
                <table class="inner-body" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 570px; background-color: #ffffff; border-color: #e8e5ef; border-radius: 2px; border-width: 1px; box-shadow: 0 2px 0 rgba(0, 0, 150, 0.025), 2px 4px 0 rgba(0, 0, 150, 0.015); margin: 0 auto; padding: 0; width: 570px;">
                <!-- Body content -->
                <tr>
                <td class="content-cell" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; max-width: 100vw; padding: 32px;">
                `;
const footer = `<p style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; font-size: 16px; line-height: 1.5em; margin-top: 0; text-align: left;">Thanks,<br>
                Hotbym</p>
                </td>
                </tr>
                </table>
                </td>
                </tr>

                <tr>
                <td style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative;">
                <table class="footer" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 570px; margin: 0 auto; padding: 0; text-align: center; width: 570px;">
                <tr>
                <td class="content-cell" align="center" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; max-width: 100vw; padding: 32px;">
                <p style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; line-height: 1.5em; margin-top: 0; color: #b0adc5; font-size: 12px; text-align: center;">© 2022 Hotbym. All rights reserved.</p>

                </td>
                </tr>
                </table>
                </td>
                </tr>
                </table>
                </td>
                </tr>
                </table>
                </body>
                </html>`;
const forgotPasswordEmail = (link) => {
    return `${header}
            <p><b>Hello!</b>, 
            <br /> <br />
                You are receiving this email because we received a password reset request for your account.
                <br /> <br />
                <a href="${link}">Reset Link</a>
                <br /><br />
                This password reset link will expire in 60 minutes.
                <br />
                If you did not request a password reset, no further action is required.
            </p>
            ${footer}
            `;
};
exports.forgotPasswordEmail = forgotPasswordEmail;
const accountCreatedEmail = (link) => {
    return `${header}
            <p><b>Hello ${link}!</b>, 
            <br /> <br />
            Welcome to Hotbym. We’re thrilled to see you here!
            <br />
            We’re confident that Hotbym will help you find the best accomodation.
            <br />
            Thank you.
            </p>
            ${footer}
            `;
};
exports.accountCreatedEmail = accountCreatedEmail;
const contactEmail = (values) => {
    return `${header}
            <p>
                <b>Hello Admin!</b>, 
                <br /> <br />
                This message was sent from the contact form at hotbym.com
                <br /> <br />
                First Name: ${values === null || values === void 0 ? void 0 : values.firstName}
                <br />
                Last Name: ${values === null || values === void 0 ? void 0 : values.lastName}
                <br />
                Email: ${values === null || values === void 0 ? void 0 : values.email}
                <br /> 
                Subject: ${values === null || values === void 0 ? void 0 : values.subject}
                <br /> 
                Message: ${values === null || values === void 0 ? void 0 : values.message}
                <br /><br />
            </p>
            ${footer}
            `;
};
exports.contactEmail = contactEmail;
const requestEmail = (values) => {
    return `${header}
            <p>
                <b>Hello Admin!</b>, 
                <br /> <br />
                This message was sent from the Bookings Request form at hotbym.com
                <br /> <br />
                Company Name: ${values === null || values === void 0 ? void 0 : values.companyName}
                <br />
                Guest Name: ${JSON.stringify(values === null || values === void 0 ? void 0 : values.guest).replace(/[^\w ]/g, '').replace(/name/g, ' - ')}
                <br /> 
                Email: ${values === null || values === void 0 ? void 0 : values.email}
                <br /> 
                Telephone: ${values === null || values === void 0 ? void 0 : values.telephone}
                <br /> 
                Location: ${values === null || values === void 0 ? void 0 : values.location}
                <br /> 
                Budget: ${values === null || values === void 0 ? void 0 : values.budget}
                <br /> 
                Check In: ${values === null || values === void 0 ? void 0 : values.checkin}
                <br /> 
                Check Out: ${values === null || values === void 0 ? void 0 : values.checkout}
                <br /> 
                Additions: ${values === null || values === void 0 ? void 0 : values.additions}
                <br /><br />
            </p>
            ${footer}
            `;
};
exports.requestEmail = requestEmail;
const userBookingOfflineEmail = (values) => {
    return `${header}
            <p>
                <b>Hello ${values === null || values === void 0 ? void 0 : values.firstName}!</b>, 
                <br /> <br />
                Your booking has been received at hotbym.com
                <br /> <br />
                Order ID: HB-${values === null || values === void 0 ? void 0 : values.orderId}
                <br />
                Check In: ${values === null || values === void 0 ? void 0 : values.checkIn}
                <br /> 
                Check Out: ${values === null || values === void 0 ? void 0 : values.checkOut}
                <br /> 
                Accomodation: ${values === null || values === void 0 ? void 0 : values.accomodation}
                <br /> 
                Room: ${values === null || values === void 0 ? void 0 : values.room}
                <br /> 
                Payment Status: Pending
                <br /> <br />
                Bank: ${values === null || values === void 0 ? void 0 : values.bank}
                <br />
                Account Name: ${values === null || values === void 0 ? void 0 : values.accountName}
                <br />
                Account NO.: ${values === null || values === void 0 ? void 0 : values.accountNo}
                <br />
                Total Amount: ${values === null || values === void 0 ? void 0 : values.amount}
                <br /><br />

                NOTE: Make sure to add the Order ID in your payment remarks.
            </p>
            ${footer}
            `;
};
exports.userBookingOfflineEmail = userBookingOfflineEmail;
const userBookingOnlineEmail = (values) => {
    return `${header}
            <p>
                <b>Hello ${values === null || values === void 0 ? void 0 : values.firstName}!</b>, 
                <br /> <br />
                Your booking has been received at hotbym.com
                <br /> <br />
                Order ID: HB-${values === null || values === void 0 ? void 0 : values.orderId}
                <br />
                Check In: ${values === null || values === void 0 ? void 0 : values.checkIn}
                <br /> 
                Check Out: ${values === null || values === void 0 ? void 0 : values.checkOut}
                <br /> 
                Accomodation: ${values === null || values === void 0 ? void 0 : values.accomodation}
                <br /> 
                Room: ${values === null || values === void 0 ? void 0 : values.room}
                <br /> 
                Payment Status: Complete
                <br /> <br />
                Payment Channel: ${values === null || values === void 0 ? void 0 : values.channel}
                <br />
                Total Amount: ${values === null || values === void 0 ? void 0 : values.amount}
                <br /><br />
            </p>
            ${footer}
            `;
};
exports.userBookingOnlineEmail = userBookingOnlineEmail;
const adminOfflineBookingEmail = (values) => {
    return `${header}
            <p>
                <b>Hello Admin!</b>, 
                <br /> <br />
                A new bookings has been received at hotbym.com
                <br /> <br />
                Order ID: ${values === null || values === void 0 ? void 0 : values.orderId}
                <br />
                Check In: ${values === null || values === void 0 ? void 0 : values.checkIn}
                <br /> 
                Check Out: ${values === null || values === void 0 ? void 0 : values.checkOut}
                <br /> 
                Accomodation: ${values === null || values === void 0 ? void 0 : values.accomodation}
                <br /> 
                Room: ${values === null || values === void 0 ? void 0 : values.room}
                <br /> 
                Payment Status: Pending
                <br /> <br />
                Bank: ${values === null || values === void 0 ? void 0 : values.bank}
                <br />
                Account Name: ${values === null || values === void 0 ? void 0 : values.accountName}
                <br />
                Account NO.: ${values === null || values === void 0 ? void 0 : values.accountNo}
                <br />
                Total Amount: ${values === null || values === void 0 ? void 0 : values.amount}
                <br /><br />
            </p>
            ${footer}
            `;
};
exports.adminOfflineBookingEmail = adminOfflineBookingEmail;
const adminOnlineBookingEmail = (values) => {
    return `${header}
            <p>
                <b>Hello Admin!</b>, 
                <br /> <br />
                A new bookings has been received at hotbym.com
                <br /> <br />
                Order ID: ${values === null || values === void 0 ? void 0 : values.orderId}
                <br />
                Check In: ${values === null || values === void 0 ? void 0 : values.checkIn}
                <br /> 
                Check Out: ${values === null || values === void 0 ? void 0 : values.checkOut}
                <br /> 
                Accomodation: ${values === null || values === void 0 ? void 0 : values.accomodation}
                <br /> 
                Room: ${values === null || values === void 0 ? void 0 : values.room}
                <br /> 
                Payment Status: Complete
                <br /> <br />
                Payment Channel: ${values === null || values === void 0 ? void 0 : values.channel}
                <br />
                Total Amount: ${values === null || values === void 0 ? void 0 : values.amount}
                <br /><br />
            </p>
            ${footer}
            `;
};
exports.adminOnlineBookingEmail = adminOnlineBookingEmail;
const hotelOnlineBookingEmail = (values) => {
    return `${header}
            <p>
                <b>Hello Hotel Manager!</b>, 
                <br /> <br />
                A new bookings has been received at hotbym.com
                <br /> <br />
                Order ID: ${values === null || values === void 0 ? void 0 : values.orderId}
                <br />
                Check In: ${values === null || values === void 0 ? void 0 : values.checkIn}
                <br /> 
                Check Out: ${values === null || values === void 0 ? void 0 : values.checkOut}
                <br /> 
                Room: ${values === null || values === void 0 ? void 0 : values.room}
                <br /><br />
            </p>
            ${footer}
            `;
};
exports.hotelOnlineBookingEmail = hotelOnlineBookingEmail;
const hotelOfflineBookingEmail = (values) => {
    return `${header}
            <p>
                <b>Hello Hotel Manager!</b>, 
                <br /> <br />
                A new bookings has been received at hotbym.com
                <br /> <br />
                Order ID: ${values === null || values === void 0 ? void 0 : values.orderId}
                <br />
                Check In: ${values === null || values === void 0 ? void 0 : values.checkIn}
                <br /> 
                Check Out: ${values === null || values === void 0 ? void 0 : values.checkOut}
                <br /> 
                Room: ${values === null || values === void 0 ? void 0 : values.room}
                <br /><br />
            </p>
            ${footer}
            `;
};
exports.hotelOfflineBookingEmail = hotelOfflineBookingEmail;
