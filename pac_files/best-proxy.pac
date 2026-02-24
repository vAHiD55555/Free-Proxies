function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 123.54.197.50:23249",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 119.81.189.194:8123",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 79.122.230.20:8080",
        "SOCKS 3.24.178.81:80",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 61.72.221.84:3128",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 169.57.157.146:8123",
        "SOCKS 194.135.17.31:1080",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 14.56.118.24:3128",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 31.15.169.77:808",
        "SOCKS 51.158.68.68:8811",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 203.25.208.163:1145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}