function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 5.255.117.250:1080",
        "SOCKS 159.65.230.91:20714",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 167.172.109.12:39533",
        "SOCKS 125.87.82.86:3256",
        "SOCKS 159.65.230.91:20050",
        "SOCKS 176.113.73.102:3128",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 3.24.178.81:80",
        "SOCKS 121.128.121.34:3128",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 202.62.55.95:1080",
        "SOCKS 110.235.255.252:1080",
        "SOCKS 159.65.230.91:20091",
        "SOCKS 159.65.230.91:20273",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}