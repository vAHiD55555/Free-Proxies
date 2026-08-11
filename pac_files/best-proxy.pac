function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 140.245.53.190:1088",
        "SOCKS 185.210.85.26:56981",
        "SOCKS 194.163.174.78:1082",
        "SOCKS 46.161.27.244:995",
        "SOCKS 175.27.250.85:44221",
        "SOCKS 67.207.92.87:1088",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 212.46.194.203:1080",
        "SOCKS 47.238.236.151:5555",
        "SOCKS 72.36.32.222:9050",
        "SOCKS 212.58.132.5:1080",
        "SOCKS 43.162.90.69:1080",
        "SOCKS 45.192.9.27:1080",
        "SOCKS 103.176.187.228:9090",
        "SOCKS 117.244.114.54:1080",
        "SOCKS 77.95.201.16:9150",
        "SOCKS 31.76.15.189:1080",
        "SOCKS 38.180.235.32:1080",
        "SOCKS 23.238.10.32:1080",
        "SOCKS 141.148.8.171:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}