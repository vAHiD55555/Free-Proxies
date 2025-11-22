function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.129.35.9:57114",
        "SOCKS 213.255.209.88:80",
        "SOCKS 157.180.121.252:43283",
        "SOCKS 217.142.227.103:8080",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 8.218.22.178:1011",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 157.180.121.252:59415",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 43.153.64.222:14472",
        "SOCKS 183.232.157.102:1100",
        "SOCKS 43.153.64.222:12167",
        "SOCKS 84.17.27.253:9105",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 15.160.134.84:9277",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 36.147.78.166:80",
        "SOCKS 38.183.144.18:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}