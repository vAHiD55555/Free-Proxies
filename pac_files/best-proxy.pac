function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 23.251.62.210:10080",
        "SOCKS 128.140.76.145:19633",
        "SOCKS 72.10.160.172:13391",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 157.180.52.134:60001",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 72.10.160.91:13103",
        "SOCKS 216.218.249.28:8181",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 84.241.6.102:8080",
        "SOCKS 119.214.232.23:1080",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 216.229.112.25:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}