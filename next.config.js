module.exports= {
    env: {
        "CLIENT_ID":"AQFI3ZQ9aG8LxYpNu0Z-RLZjkKGm60tqT_yvECsptdhwvAbe-S8rZyG96UpqwddCyXarNG0U9qF34Uzv",
        "RECAPTCHA_SITE_KEY": "6LfnWtoaAAAAAITzq5VKNAa2cKpZUP17pTkIjLNQ",
        "RECAPTCHA_SECRET_KEY": "6LfnWtoaAAAAAOgBkFSi19wcAOm0CmSs_dFvJxJB"
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