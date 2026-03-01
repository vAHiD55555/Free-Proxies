function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.221.242.131:9999",
        "SOCKS 203.189.154.80:1080",
        "SOCKS 64.227.131.240:1080",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 65.108.203.36:18080",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 92.42.15.29:1080",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 212.34.135.86:5000",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 37.120.140.158:3128",
        "SOCKS 185.123.143.247:3128",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 193.233.254.82:1080",
        "SOCKS 78.135.105.217:50504",
        "SOCKS 104.219.236.127:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}