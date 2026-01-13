function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 102.36.127.231:1080",
        "SOCKS 46.172.36.213:8080",
        "SOCKS 202.62.42.230:1080",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 62.60.131.197:7170",
        "SOCKS 20.210.76.175:8561",
        "SOCKS 110.235.247.47:1080",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 138.199.25.13:3903",
        "SOCKS 154.127.219.242:999",
        "SOCKS 15.160.134.84:238",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 110.235.248.81:1080",
        "SOCKS 36.255.98.160:4149",
        "SOCKS 179.57.215.99:999",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 103.204.211.48:32255",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}