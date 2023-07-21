function protect_email(email) {
    const parts = email.split("@");  
    const username = parts[0].slice(0, 5) + "...";  
    return username + "@" + parts[1];
  }
  console.log(protect_email("robin_singh@example.com")); // "robin...@example.com"
  