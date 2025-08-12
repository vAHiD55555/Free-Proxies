function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 188.166.230.109:31028",
        "SOCKS 138.199.25.13:3904",
        "SOCKS 24.199.103.116:42206",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 171.228.181.239:4001",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 82.223.165.28:38245",
        "SOCKS 45.89.28.226:12915",
        "SOCKS 64.181.240.152:3128",
        "SOCKS 95.47.239.65:3128",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 27.79.134.136:16000",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 134.209.29.120:1080",
        "SOCKS 92.118.169.34:3129",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 222.59.173.105:44124",
        "SOCKS 135.181.203.208:80",
        "SOCKS 118.71.132.44:1002",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}