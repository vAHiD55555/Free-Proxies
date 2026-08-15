function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 15.204.235.27:1080",
        "SOCKS 89.169.13.144:1080",
        "SOCKS 91.206.14.55:1080",
        "SOCKS 176.37.107.86:11111",
        "SOCKS 83.215.25.66:9050",
        "SOCKS 147.45.66.115:1082",
        "SOCKS 79.76.52.220:1080",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 8.221.141.88:9036",
        "SOCKS 122.51.108.168:7890",
        "SOCKS 103.216.49.147:1080",
        "SOCKS 171.25.158.95:1080",
        "SOCKS 144.24.47.42:1080",
        "SOCKS 164.52.216.51:8080",
        "SOCKS 8.221.141.88:5631",
        "SOCKS 110.235.255.252:1080",
        "SOCKS 103.166.184.104:9191",
        "SOCKS 109.120.133.253:9999",
        "SOCKS 47.250.159.65:801",
        "SOCKS 112.90.88.102:20000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}