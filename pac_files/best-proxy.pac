function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.82.97.76:1111",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 147.75.34.74:10019",
        "SOCKS 27.79.200.193:16000",
        "SOCKS 173.209.63.67:8226",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 134.209.29.120:1080",
        "SOCKS 65.108.203.35:28080",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 223.25.110.37:8199",
        "SOCKS 213.87.103.76:3128",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 212.110.188.219:34408",
        "SOCKS 18.188.141.177:8834",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}