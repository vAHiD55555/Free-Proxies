function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.255.98.153:4317",
        "SOCKS 88.99.27.163:5093",
        "SOCKS 36.255.98.167:10805",
        "SOCKS 62.60.131.203:4673",
        "SOCKS 62.60.131.178:17557",
        "SOCKS 36.255.98.160:4226",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 36.255.98.167:6984",
        "SOCKS 36.255.98.162:10809",
        "SOCKS 36.255.98.154:4326",
        "SOCKS 8.212.177.126:8080",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 36.255.98.165:12053",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 3.112.125.130:3128",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 62.60.131.204:4924",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}