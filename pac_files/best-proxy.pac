function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 167.172.109.12:37355",
        "SOCKS 4.216.195.194:3128",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 67.43.228.254:2447",
        "SOCKS 178.57.73.150:1080",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 106.45.221.168:3256",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 3.24.178.81:80",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 188.166.252.135:8080",
        "SOCKS 47.76.189.189:8899",
        "SOCKS 190.119.160.27:56160",
        "SOCKS 157.175.147.228:10011",
        "SOCKS 193.239.86.248:3128",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 115.221.242.131:9999",
        "SOCKS 95.216.17.79:3888",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 120.92.212.16:8890",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}