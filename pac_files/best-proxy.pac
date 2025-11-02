function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 69.49.234.59:55781",
        "SOCKS 85.131.243.125:3128",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 154.73.28.253:8080",
        "SOCKS 72.10.160.93:26517",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 221.202.27.194:10808",
        "SOCKS 177.234.217.45:999",
        "SOCKS 117.74.65.207:80",
        "SOCKS 1.10.141.115:8080",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 103.249.19.248:10001",
        "SOCKS 3.107.252.199:45157",
        "SOCKS 176.117.106.149:8080",
        "SOCKS 41.223.119.156:3128",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 144.91.78.34:20269",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}