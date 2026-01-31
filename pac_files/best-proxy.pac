function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 38.194.235.146:999",
        "SOCKS 62.60.131.204:4359",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 36.255.98.163:4249",
        "SOCKS 62.60.131.205:4959",
        "SOCKS 36.255.98.168:6956",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 36.255.98.168:4017",
        "SOCKS 36.255.98.151:6338",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 193.24.120.242:1401",
        "SOCKS 62.60.131.204:5280",
        "SOCKS 138.68.60.8:80",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 160.238.122.200:8080",
        "SOCKS 119.81.71.27:8123",
        "SOCKS 13.36.243.194:9899",
        "SOCKS 31.43.194.184:1080",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 167.172.109.12:40825",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}