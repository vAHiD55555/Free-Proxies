function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 149.202.75.85:36666",
        "SOCKS 91.107.138.98:2255",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 203.189.154.129:1080",
        "SOCKS 61.9.34.118:58765",
        "SOCKS 49.0.26.183:1080",
        "SOCKS 87.107.48.225:1080",
        "SOCKS 78.63.115.20:8899",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 187.63.9.62:63253",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 117.74.65.207:443",
        "SOCKS 62.60.131.178:4673",
        "SOCKS 43.157.34.94:1777",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 185.118.51.163:3128",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 98.185.94.94:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}