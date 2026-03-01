function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 104.238.30.40:59741",
        "SOCKS 104.238.30.50:59741",
        "SOCKS 119.84.215.127:3256",
        "SOCKS 213.226.122.5:7788",
        "SOCKS 148.135.85.87:1080",
        "SOCKS 167.172.109.12:37355",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 117.1.48.242:20082",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 176.113.73.104:3128",
        "SOCKS 223.113.89.138:1080",
        "SOCKS 95.216.17.79:3888",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 138.2.72.115:1090",
        "SOCKS 103.122.3.46:60000",
        "SOCKS 213.35.110.67:10863",
        "SOCKS 177.19.167.242:80",
        "SOCKS 103.75.118.84:1080",
        "SOCKS 115.127.62.50:1088",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}