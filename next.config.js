module.exports= {
    env: {
        "CLIENT_ID":"AQFI3ZQ9aG8LxYpNu0Z-RLZjkKGm60tqT_yvECsptdhwvAbe-S8rZyG96UpqwddCyXarNG0U9qF34Uzv",
        "RECAPTCHA_SITE_KEY": "6Lf0j8gaAAAAAAHln6oC_aCI2fgRiq_K7MlbRlBv",
        "RECAPTCHA_SECRET_KEY": "6Lf0j8gaAAAAAJgwdiGpA5YlhIocc0xnUsKOQ2O9"
    },

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