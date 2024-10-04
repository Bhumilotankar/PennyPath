// Get elements for buttons and sections
const profileBtn = document.getElementById('profile-btn');
const preferencesBtn = document.getElementById('preferences-btn');
const accountSettingsBtn = document.getElementById('account-settings-btn');
const billingHistoryBtn = document.getElementById('billing-history-btn');
const supportBtn = document.getElementById('support-btn');

const profileSection = document.getElementById('profile-section');
const preferencesSection = document.getElementById('preferences-section');
const accountSettingsSection = document.getElementById('account-settings-section');
const billingHistorySection = document.getElementById('billing-history-section');
const supportSection = document.getElementById('support-section');

// Modals for Change Password and Confirmation Prompts
const passwordModal = document.getElementById('password-modal');
const confirmationModal = document.getElementById('confirmation-modal');

// Buttons for Account Settings Actions
const changePasswordBtn = document.getElementById('change-password-btn');
const deleteAccountBtn = document.getElementById('delete-account-btn');
const deactivateAccountBtn = document.getElementById('deactivate-account-btn');

// Buttons inside modals
const closePasswordModal = document.getElementById('close-password-modal');
const confirmDeleteDeactivateBtn = document.getElementById('confirm-delete-deactivate');
const cancelDeleteDeactivateBtn = document.getElementById('cancel-delete-deactivate');

// Function to hide all sections
function hideAllSections() {
    profileSection.classList.remove('active');
    preferencesSection.classList.remove('active');
    accountSettingsSection.classList.remove('active');
    billingHistorySection.classList.remove('active');
    supportSection.classList.remove('active');
}

// Function to remove 'active' class from all buttons
function resetActiveClass() {
    profileBtn.classList.remove('active');
    preferencesBtn.classList.remove('active');
    accountSettingsBtn.classList.remove('active');
    billingHistoryBtn.classList.remove('active');
    supportBtn.classList.remove('active');
}

// Function to activate a section
function activateSection(section, button) {
    hideAllSections();
    resetActiveClass();
    section.classList.add('active');
    button.classList.add('active');
}

// Add event listeners to buttons
profileBtn.addEventListener('click', () => activateSection(profileSection, profileBtn));
preferencesBtn.addEventListener('click', () => activateSection(preferencesSection, preferencesBtn));
accountSettingsBtn.addEventListener('click', () => activateSection(accountSettingsSection, accountSettingsBtn));
billingHistoryBtn.addEventListener('click', () => activateSection(billingHistorySection, billingHistoryBtn));
supportBtn.addEventListener('click', () => activateSection(supportSection, supportBtn));

// Default to profile section on page load
activateSection(profileSection, profileBtn);

// Show Change Password Modal
changePasswordBtn.addEventListener('click', () => {
    passwordModal.classList.remove('hidden');
});

// Close Change Password Modal
closePasswordModal.addEventListener('click', () => {
    passwordModal.classList.add('hidden');
});

// Show Delete/Deactivate Account Confirmation Modal
function showConfirmationModal(action) {
    confirmationModal.classList.remove('hidden');
    confirmDeleteDeactivateBtn.setAttribute('data-action', action); // Set data attribute to track the action
}

// Show Confirmation Modal when Delete or Deactivate buttons are clicked
deleteAccountBtn.addEventListener('click', () => {
    showConfirmationModal('delete');
});
deactivateAccountBtn.addEventListener('click', () => {
    showConfirmationModal('deactivate');
});

// Handle confirmation modal action (delete or deactivate)
confirmDeleteDeactivateBtn.addEventListener('click', () => {
    const action = confirmDeleteDeactivateBtn.getAttribute('data-action');
    if (action === 'delete') {
        alert('Account deleted successfully.');
    } else if (action === 'deactivate') {
        alert('Account deactivated successfully.');
    }
    confirmationModal.classList.add('hidden');
});

// Cancel Delete/Deactivate action
cancelDeleteDeactivateBtn.addEventListener('click', () => {
    confirmationModal.classList.add('hidden');
});
