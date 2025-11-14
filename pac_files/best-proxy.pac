function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 141.94.104.205:48452",
        "SOCKS 195.234.68.34:3128",
        "SOCKS 38.159.62.7:999",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 89.58.45.94:27215",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 89.58.45.94:10065",
        "SOCKS 40.192.27.104:16825",
        "SOCKS 89.58.45.94:10033",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 120.77.203.0:443",
        "SOCKS 157.180.121.252:16883",
        "SOCKS 210.87.125.146:8090",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 161.35.31.237:1080",
        "SOCKS 89.58.45.94:44015",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}