function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 184.185.2.45:4145",
        "SOCKS 141.11.37.220:8080",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 58.186.131.73:16000",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 74.81.46.242:60007",
        "SOCKS 188.166.197.129:3128",
        "SOCKS 165.22.240.121:3128",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 184.178.172.5:15303",
        "SOCKS 51.79.99.237:4502",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 72.195.114.169:4145",
        "SOCKS 14.239.189.250:8080",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 195.93.173.58:9050",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}