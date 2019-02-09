/*
WARNING: YOU SHOULD NOT DO THIS IN A PRODUCTION ENVIRONMENT.

It's possible to unpack both iOS and Android app distribution files. Any data contained within is not secure. In case of service API keys, this means you could end up paying for someone else's service usage.

The solutions are non-trivial and involve setting up a proxy server/system that somehow controls the access to the API. This requires

1. access validation (to see whether it's your app)
2. rate limiting (second line of defense against abuse)

Since apps distributed through both Google Play and iStore are signed, the signature could be used for 1. For Mapbox, which calculates mobile API access as user/month, generating and managing per-user API keys could be 2.
 */

const appinfo = {
  mapbox: '<your Mapbox key>'
}

export default appinfo;
