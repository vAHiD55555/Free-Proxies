function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 152.53.36.101:11546",
        "SOCKS 171.238.102.99:1040",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 120.77.203.0:443",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 171.238.102.99:1120",
        "SOCKS 147.185.221.19:14365",
        "SOCKS 195.93.145.213:1080",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 38.183.144.18:1080",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 200.48.35.126:999",
        "SOCKS 165.101.189.3:1080",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 121.42.9.57:7201",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}