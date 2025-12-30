function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.255.98.160:11921",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 103.250.69.86:9107",
        "SOCKS 123.136.24.161:1080",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 35.182.97.107:80",
        "SOCKS 52.78.193.98:157",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 68.71.251.134:4145",
        "SOCKS 43.133.32.76:1777",
        "SOCKS 110.235.248.150:1080",
        "SOCKS 72.10.160.91:23471",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 200.59.186.178:999",
        "SOCKS 37.157.217.144:10810",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 14.224.181.172:8080",
        "SOCKS 62.60.131.188:5596",
        "SOCKS 185.244.208.195:23699",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}