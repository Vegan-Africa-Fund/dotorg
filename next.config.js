module.exports= {
    env: {
        "CLIENT_ID":"AQFI3ZQ9aG8LxYpNu0Z-RLZjkKGm60tqT_yvECsptdhwvAbe-S8rZyG96UpqwddCyXarNG0U9qF34Uzv",
        "RECAPTCHA_SITE_KEY": "6LduxtsaAAAAANMCMqw3INxLfmVZyE2dB8uI1_7M",
        "RECAPTCHA_SECRET_KEY": "6LduxtsaAAAAAMet8Nf4KUdZGmurIz6uxXliHzEJ"
    },
    webpack5: false,
    webpack: (config) => {
        return {
          ...config,
          node: {
            fs:
              'empty'
            }
          }
       }
}