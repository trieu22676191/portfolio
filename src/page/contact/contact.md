# Contact

## Overview

The Contact section is designed to provide recruiters, clients, and collaborators with multiple ways to get in touch. It consists of a two-column responsive layout that works seamlessly across desktop, tablet, and mobile devices.

---

# Layout

Desktop

```
------------------------------------------------------------
|                    Contact Me                            |
|----------------------------------------------------------|
| Send Message          | Contact Information              |
|                       |                                  |
| Name                  | 📧 Email                         |
| Email                 | 📱 Phone                         |
| Subject               | 📍 Current Address               |
| Message               | 🏠 Hometown                      |
|                       |                                  |
| [ Send Message ]      | Social Media                     |
------------------------------------------------------------
```

Tablet & Mobile

```
Contact Information

↓

Send Message
```

---

# Left Column - Send Message

## Section Title

**Send Me a Message**

## Description

Have a project in mind or an opportunity you'd like to discuss? Feel free to send me a message. I'll get back to you as soon as possible.

---

## Contact Form

### Full Name

- Input Text
- Placeholder

```
Enter your full name
```

---

### Email Address

- Input Email
- Placeholder

```
Enter your email address
```

---

### Subject

- Input Text
- Placeholder

```
Enter the subject
```

---

### Message

- Textarea

Placeholder

```
Write your message here...
```

---

## Send Button

Text

```
Send Message
```

### Function

When the user clicks **Send Message**, the form will send the entered information directly to:

**trieu22676191@gmail.com**

Recommended implementation:

- EmailJS (No Backend Required)
- Formspree
- Web3Forms

EmailJS is recommended because it is free, easy to integrate, and suitable for portfolio websites.

---

# Right Column - Contact Information

## Section Title

**Contact Information**

---

### 📧 Email

trieu22676191@gmail.com

---

### 📱 Phone

0362356676

---

### 📍 Current Address

An Hoi Dong Ward,

Ho Chi Minh City,

Vietnam

---

### 🏠 Hometown

Tan Long Commune,

Dong Thap Province,

Vietnam

---

# Social Media

Display social icons in a horizontal row.

Icons:

- GitHub
- LinkedIn
- Facebook
- Instagram
- TikTok

Each icon links directly to the corresponding social media profile.

Example:

```
GitHub     → https://github.com/trieu22676191

LinkedIn  → https://www.linkedin.com/in/nguyenphutrieu2004

Facebook  → https://www.facebook.com/teerius

Instagram → https://www.instagram.com/_teerius_/

TikTok    → https://www.tiktok.com/@_teerius.04?is_from_webapp=1&sender_device=pc

```

Hover Effect

- Scale 1.1
- Icon color changes to primary color
- Smooth transition (0.3s)

---

# Design Style

Card Style

- Rounded corners (16px)
- Glassmorphism or Soft Shadow
- Modern Minimal Design

Spacing

- Comfortable padding
- Balanced white space

Color

- Follow the website's primary theme

Icons

Use **Lucide React** or **React Icons**.

---

# Responsive Design

## Desktop

```
Left : 60%

Right : 40%
```

---

## Tablet

```
Left : 55%

Right : 45%
```

---

## Mobile

```
Contact Information

↓

Send Message
```

Everything should stack vertically for the best mobile experience.

---

# Animation

- Fade In when section enters viewport
- Floating icons on hover
- Button hover animation
- Input focus border animation
- Smooth scrolling
- Loading animation when sending email
- Success notification after sending
- Error notification if sending fails

---

# Additional Features

- Form validation
- Email format validation
- Required field validation
- Loading spinner while sending
- Success toast notification
- Error toast notification
- Disable button while sending
- Auto-clear form after successful submission