function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.245.165.201:1080",
        "SOCKS 47.250.211.53:1080",
        "SOCKS 158.46.23.102:10080",
        "SOCKS 78.188.230.81:3310",
        "SOCKS 46.62.246.93:9050",
        "SOCKS 68.233.127.229:1080",
        "SOCKS 176.226.184.234:1080",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 165.154.162.73:8888",
        "SOCKS 23.27.141.23:3080",
        "SOCKS 165.22.161.41:8118",
        "SOCKS 193.233.139.106:1080",
        "SOCKS 176.209.141.181:1080",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 117.244.114.54:1080",
        "SOCKS 159.223.52.199:3128",
        "SOCKS 130.49.187.61:1082",
        "SOCKS 109.172.55.227:1082",
        "SOCKS 70.166.65.160:4145",
        "SOCKS 165.154.3.4:10808",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}