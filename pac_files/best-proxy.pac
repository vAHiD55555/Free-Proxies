function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.6.9.176:8072",
        "SOCKS 203.189.158.218:1080",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 62.60.131.205:5471",
        "SOCKS 103.195.100.154:10080",
        "SOCKS 115.221.242.131:9999",
        "SOCKS 62.60.131.204:5197",
        "SOCKS 85.214.94.28:3128",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 36.255.98.160:8498",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 142.132.139.242:5141",
        "SOCKS 36.255.98.181:17463",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 36.255.98.182:41458",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 51.158.172.165:8811",
        "SOCKS 36.255.98.169:4117",
        "SOCKS 91.211.115.127:1080",
        "SOCKS 165.227.174.249:33080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}