function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 202.62.52.120:1080",
        "SOCKS 45.74.31.46:5125",
        "SOCKS 45.74.31.42:9503",
        "SOCKS 69.174.54.54:12603",
        "SOCKS 163.53.204.178:9813",
        "SOCKS 45.74.31.47:9561",
        "SOCKS 185.248.138.216:1080",
        "SOCKS 45.74.31.41:4535",
        "SOCKS 45.74.31.41:4308",
        "SOCKS 160.22.92.24:69",
        "SOCKS 107.173.153.250:1080",
        "SOCKS 188.186.102.92:1080",
        "SOCKS 45.74.31.40:4552",
        "SOCKS 3.139.63.63:8000",
        "SOCKS 45.74.31.41:9255",
        "SOCKS 193.233.49.169:1081",
        "SOCKS 45.74.31.46:7305",
        "SOCKS 45.74.31.40:16439",
        "SOCKS 45.154.35.63:1088",
        "SOCKS 213.111.146.36:18080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}