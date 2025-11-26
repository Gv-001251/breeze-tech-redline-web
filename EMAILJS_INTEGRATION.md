# EmailJS Integration

This document describes the EmailJS integration implemented in the Breeze Techniques contact form.

## Configuration

The contact form in `src/components/Contact.tsx` has been integrated with EmailJS using the following credentials:

- **Service ID**: `service_otredh8`
- **Template ID**: `template_ex0spwi`
- **Public Key**: `maDLHCzI4jGPlQ69M`

## Implementation Details

### Dependencies
- `@emailjs/browser` package has been added to handle EmailJS functionality

### Form Data Mapping
The form fields are mapped to EmailJS template parameters as follows:

```javascript
const templateParams = {
  from_name: formData.name,        // User's full name
  from_email: formData.email,      // User's email address
  company: formData.company || 'Not provided',  // Company name (optional)
  phone: formData.phone || 'Not provided',      // Phone number (optional)
  service: formData.service || 'Not specified',  // Selected service
  message: formData.message,       // Message content
  to_email: 'info@breezetechniques.com'  // Default recipient
};
```

### Error Handling
- Success: Shows success toast notification and resets form
- Failure: Shows error toast with fallback contact information
- Loading: Shows loading state during submission

### User Experience
- Form validation ensures required fields are filled
- Loading indicator during submission
- Success/error feedback via toast notifications
- Form automatically resets on successful submission

## Email Template Requirements

The EmailJS template (`template_ex0spwi`) should include the following variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{company}}` - Company name
- `{{phone}}` - Phone number
- `{{service}}` - Service selected
- `{{message}}` - Message content
- `{{to_email}}` - Recipient email

## Security Notes

- The public key is exposed in the client-side code (this is required by EmailJS)
- EmailJS handles the secure email sending on their servers
- No server-side code is required for this implementation