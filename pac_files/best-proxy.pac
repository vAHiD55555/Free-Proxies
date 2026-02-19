function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 109.245.231.73:8192",
        "SOCKS 116.242.89.230:3128",
        "SOCKS 217.76.245.80:999",
        "SOCKS 119.81.189.194:80",
        "SOCKS 123.54.197.18:20879",
        "SOCKS 167.172.109.12:37355",
        "SOCKS 116.107.94.3:10001",
        "SOCKS 185.236.203.208:3128",
        "SOCKS 120.77.203.0:443",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 5.255.117.250:1080",
        "SOCKS 35.180.188.216:80",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 46.146.216.44:1080",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 45.22.209.157:8888",
        "SOCKS 111.61.73.175:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}