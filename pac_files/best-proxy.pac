function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 101.36.104.46:10808",
        "SOCKS 110.235.248.81:1080",
        "SOCKS 178.128.59.180:18080",
        "SOCKS 103.133.26.11:8080",
        "SOCKS 13.140.164.179:3622",
        "SOCKS 129.158.48.4:9050",
        "SOCKS 149.129.225.235:7777",
        "SOCKS 82.102.11.164:3460",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 194.87.71.83:8080",
        "SOCKS 201.184.165.91:1080",
        "SOCKS 174.137.134.182:2999",
        "SOCKS 5.161.50.82:8118",
        "SOCKS 37.18.73.60:5566",
        "SOCKS 117.236.124.166:3128",
        "SOCKS 43.134.53.69:1080",
        "SOCKS 38.194.251.246:999",
        "SOCKS 91.226.172.214:1080",
        "SOCKS 171.25.158.95:1080",
        "SOCKS 91.184.250.2:9050",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}