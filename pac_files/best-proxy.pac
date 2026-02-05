function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 169.57.157.146:8123",
        "SOCKS 119.81.71.27:80",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 12.156.45.155:3128",
        "SOCKS 46.161.4.163:3128",
        "SOCKS 115.231.175.80:3000",
        "SOCKS 5.255.117.250:1080",
        "SOCKS 176.113.73.99:3128",
        "SOCKS 206.189.130.107:8080",
        "SOCKS 213.35.110.67:10814",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 167.172.109.12:40825",
        "SOCKS 138.199.25.13:3906",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 185.6.9.176:8072",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}