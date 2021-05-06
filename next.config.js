module.exports= {
    env: {
        "CLIENT_ID":"AeIwafErArpwDPy269gLrtUHetmTaWT_qbGkVKBjpkWNhsGOQLL_s7danWdLYPFpeCanSLtsu8g6k1dE",
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