function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 160.22.17.4:9988",
        "SOCKS 5.161.50.82:8118",
        "SOCKS 188.191.164.55:4890",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 47.82.108.195:1011",
        "SOCKS 117.244.114.54:1080",
        "SOCKS 64.225.42.129:3007",
        "SOCKS 202.62.55.95:1080",
        "SOCKS 178.250.156.112:443",
        "SOCKS 43.203.195.46:80",
        "SOCKS 110.235.247.206:1080",
        "SOCKS 188.132.174.89:9082",
        "SOCKS 202.58.77.235:8080",
        "SOCKS 172.86.94.149:1080",
        "SOCKS 36.138.206.172:1080",
        "SOCKS 149.104.4.88:10809",
        "SOCKS 213.27.29.153:51000",
        "SOCKS 15.204.235.27:1080",
        "SOCKS 195.135.255.98:1080",
        "SOCKS 217.76.54.168:9052",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}