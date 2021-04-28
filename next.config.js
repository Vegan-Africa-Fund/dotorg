module.exports= {
    env: {
        "CLIENT_ID":"AeIwafErArpwDPy269gLrtUHetmTaWT_qbGkVKBjpkWNhsGOQLL_s7danWdLYPFpeCanSLtsu8g6k1dE"
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