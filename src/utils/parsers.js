/**
 * 
 * @param {string} originalValue
 * @return {string} 
 */
export function extractUserId(originalValue) {
    const str = originalValue.toLowerCase();
    if (str.indexOf('instagram.com') > -1) {
        const match = /instagram\.com\/([^\/]+)/.exec(str);
        return match[1] || '';
    } else {
        return str;
    }
}

export function getProfileData(html) {
    if (html.indexOf('window._sharedData') === -1) return null;
    const match = /\>\s*window\.\_sharedData\s*=\s*([\s\S]*?)\;?\<\/script\>/.exec(html);

    try {
        return JSON.parse(match[1]);
    } catch (e) {
        return null;
    }
}

export function getConsumerPath(html) {
    // href="/static/bundles/metro/Consumer.js/ba7fb16bcdd6.js"
    if (html.indexOf('Consumer.js') === -1) return null;

    const match = /href=\"(\/static\/bundles\/metro\/Consumer\.js\/[^"]+)\"/.exec(html);
    return match[1];
}

export function getFollowerHashes(code) {
    const match = /var\s+t=\"([^"]+)\",n="([^"]+)",u=1,l=\{inbound:o\('inbound'\),outbound:o\('outbound'\)\}/.exec(code);
    return match.splice(1, 2);
}
