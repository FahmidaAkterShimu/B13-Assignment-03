function validOtp(otp) {
    if (typeof otp !== "string") {
        return "Invalid";
    }
    else if (otp.length === 8 && otp.startsWith("ph-")) {
        return true;
    }
    else {
        return false;
    }
}

console.log(validOtp("ph-10985"));
