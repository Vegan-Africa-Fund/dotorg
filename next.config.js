module.exports= {
    env: {
        "CLIENT_ID":"AQFI3ZQ9aG8LxYpNu0Z-RLZjkKGm60tqT_yvECsptdhwvAbe-S8rZyG96UpqwddCyXarNG0U9qF34Uzv",
        "RECAPTCHA_SITE_KEY": "6Lf2E9oaAAAAAO5NQxsk7C-eR82lsfAg8m1UIRzO",
        "RECAPTCHA_SECRET_KEY": "66Lf2E9oaAAAAAIQTVV4Xpnl8vcGcNFTbl2EckxJs"
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