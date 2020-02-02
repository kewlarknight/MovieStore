import * as Sentry from "@sentry/browser";

function init() {
    Sentry.init({
        dsn: "https://07973b72fb1747cb92152021d3588555@sentry.io/2173677"
    });
}

function log(error) {
    Sentry.captureException(error);
}

export default {
    init,
    log
};