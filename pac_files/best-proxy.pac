function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 160.19.16.86:1080",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 103.114.53.2:8080",
        "SOCKS 85.133.227.150:80",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 51.158.172.165:8811",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 113.100.209.184:3128",
        "SOCKS 85.214.94.28:3128",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 188.130.160.209:80",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 85.214.244.174:3128",
        "SOCKS 213.35.110.67:10810",
        "SOCKS 20.238.182.30:3128",
        "SOCKS 103.82.23.118:6171",
        "SOCKS 185.123.143.247:3128",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 138.201.139.252:12344",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}