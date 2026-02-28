function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 121.169.46.116:1090",
        "SOCKS 176.34.238.188:1080",
        "SOCKS 167.172.253.162:4857",
        "SOCKS 88.210.11.250:1080",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 167.172.109.12:39533",
        "SOCKS 176.113.73.99:3128",
        "SOCKS 183.164.254.8:4216",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 159.8.114.37:8123",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 106.45.221.168:3256",
        "SOCKS 125.128.12.74:3128",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 124.248.189.223:1080",
        "SOCKS 27.147.137.234:9108",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 146.235.19.84:10824",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}