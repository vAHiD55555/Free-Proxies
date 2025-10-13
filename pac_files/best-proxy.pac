function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.158.253.13:8382",
        "SOCKS 119.98.132.148:1080",
        "SOCKS 45.144.234.129:53681",
        "SOCKS 91.84.99.28:80",
        "SOCKS 117.161.170.163:9269",
        "SOCKS 72.10.160.91:2473",
        "SOCKS 167.172.253.162:4857",
        "SOCKS 103.138.123.242:8082",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 8.211.200.183:9098",
        "SOCKS 159.89.25.162:8080",
        "SOCKS 185.130.226.55:1080",
        "SOCKS 65.108.203.36:18080",
        "SOCKS 103.154.230.117:8090",
        "SOCKS 5.78.67.134:8088",
        "SOCKS 157.230.220.25:4857",
        "SOCKS 47.252.29.28:11222",
        "SOCKS 46.172.36.213:8080",
        "SOCKS 221.1.104.177:7302",
        "SOCKS 114.80.36.171:3081",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}