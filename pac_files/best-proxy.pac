function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 38.159.62.7:999",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 148.135.97.23:3128",
        "SOCKS 170.81.171.189:8282",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 89.58.45.94:42779",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 89.58.45.94:10039",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 103.56.206.94:8181",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 181.78.202.29:8080",
        "SOCKS 115.127.132.225:1080",
        "SOCKS 45.7.13.162:8080",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 89.58.45.94:29384",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}