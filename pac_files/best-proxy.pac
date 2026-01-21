function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 178.33.162.89:58574",
        "SOCKS 94.184.25.71:242",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 208.65.90.3:4145",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 36.255.98.150:4369",
        "SOCKS 36.255.98.163:11745",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 185.189.112.133:3128",
        "SOCKS 185.236.202.205:3128",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 27.147.137.234:9108",
        "SOCKS 78.135.105.217:50504",
        "SOCKS 95.111.226.235:3128",
        "SOCKS 200.71.190.60:8080",
        "SOCKS 94.184.25.52:242",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 103.54.57.117:50460",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}