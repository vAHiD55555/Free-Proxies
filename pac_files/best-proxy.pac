function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 187.127.140.233:1080",
        "SOCKS 85.15.190.8:10808",
        "SOCKS 43.242.227.10:9052",
        "SOCKS 185.248.138.201:1080",
        "SOCKS 202.141.161.52:10808",
        "SOCKS 85.91.213.96:1080",
        "SOCKS 5.223.87.143:1080",
        "SOCKS 43.198.26.236:1080",
        "SOCKS 104.168.125.189:1080",
        "SOCKS 42.115.72.145:1065",
        "SOCKS 45.74.31.40:4432",
        "SOCKS 94.228.252.226:1080",
        "SOCKS 174.138.165.203:58240",
        "SOCKS 45.74.31.42:16297",
        "SOCKS 49.234.4.115:80",
        "SOCKS 69.174.54.42:13969",
        "SOCKS 140.238.43.53:54322",
        "SOCKS 45.74.31.41:4107",
        "SOCKS 45.74.31.46:17341",
        "SOCKS 112.86.163.157:7890",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}