function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 154.203.132.81:5080",
        "SOCKS 43.156.201.214:2080",
        "SOCKS 118.194.228.2:10808",
        "SOCKS 62.113.113.114:1080",
        "SOCKS 104.161.23.122:5036",
        "SOCKS 147.45.60.124:1082",
        "SOCKS 91.107.243.254:9097",
        "SOCKS 8.219.97.248:80",
        "SOCKS 134.175.238.113:1080",
        "SOCKS 167.86.79.35:1080",
        "SOCKS 94.19.196.185:1080",
        "SOCKS 193.25.215.182:22222",
        "SOCKS 77.110.102.252:1080",
        "SOCKS 204.168.225.35:9080",
        "SOCKS 159.195.49.27:1080",
        "SOCKS 67.207.92.87:3129",
        "SOCKS 130.49.187.61:1082",
        "SOCKS 216.22.13.244:1083",
        "SOCKS 220.158.232.118:1080",
        "SOCKS 82.102.11.164:3460",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}